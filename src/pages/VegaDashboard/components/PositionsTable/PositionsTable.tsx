import { type Position } from '@/api/vega/schemas'
import { useGetAssets } from '@/api/vega/useAssets'
import { useGetPortfolios } from '@/api/vega/usePortfolios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader } from '@/components/ui/loader'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { flexRender, getCoreRowModel, useReactTable, type ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'

export default function PositionsTable() {
  'use no memo' // Required by react-table v8 https://github.com/TanStack/table/issues/5567
  const { data, isLoading, error, isError } = useGetPortfolios()
  const { data: assets, isLoading: isLoadingAssets } = useGetAssets()

  // Create a mapping from asset UUID to asset name
  const assetMap = useMemo(() => {
    if (!assets || assets.length === 0) return new Map<string, string>()
    const map = new Map<string, string>()
    assets.forEach((asset) => {
      map.set(asset.id, asset.name)
    })
    return map
  }, [assets])

  const columns = useMemo<ColumnDef<Position>[]>(
    () => [
      {
        accessorKey: 'asset',
        header: 'Asset',
        cell: (info) => {
          const assetId = info.getValue() as string
          const assetName = assetMap.get(assetId)
          if (!assetName) {
            console.warn(`Asset not found for ID: ${assetId}`, { assetMapSize: assetMap.size })
            return <span className="font-mono text-xs">{assetId}</span>
          }
          return <span>{assetName}</span>
        },
      },
      {
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: (info) => (info.getValue() as number).toLocaleString(),
      },
      {
        accessorKey: 'price',
        header: 'Price',
        cell: (info) => {
          const priceInCents = info.getValue() as number
          const priceInDollars = priceInCents / 100
          return `$${priceInDollars.toFixed(2)}`
        },
      },
      {
        id: 'totalValue',
        header: 'Total Value',
        cell: (info) => {
          const position = info.row.original
          const totalValue = (position.quantity * position.price) / 100
          return <span className="font-medium">${totalValue.toFixed(2)}</span>
        },
      },
    ],
    [assetMap],
  )

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: data?.positions ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  if (isLoading || isLoadingAssets) {
    return (
      <Card className="bg-muted/40">
        <CardContent className="p-6">
          <div
            className="flex items-center justify-center gap-2 text-sm"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={20} aria-hidden="true" />
            <span>Loading positions data…</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (isError || error) {
    return (
      <Card className="border-destructive/20 bg-destructive/10 text-destructive mt-6">
        <CardContent className="p-6" role="alert" aria-live="assertive">
          <div className="font-medium">Failed to load positions data</div>
          <div className="mt-1 text-sm">{error?.message || 'An unknown error occurred'}</div>
        </CardContent>
      </Card>
    )
  }

  if (!data || !data.positions || data.positions.length === 0) {
    return (
      <Card className="bg-muted/40 text-muted-foreground mt-6">
        <CardContent className="p-6 text-center text-sm" role="status" aria-live="polite">
          No positions data available.
        </CardContent>
      </Card>
    )
  }

  // Ensure assets are loaded before rendering
  if (!assets || assets.length === 0) {
    return (
      <Card className="bg-muted/40 mt-6">
        <CardContent className="p-6">
          <div
            className="flex items-center justify-center gap-2 text-sm"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <Loader size={20} aria-hidden="true" />
            <span>Loading assets data…</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  const totalValue = data.positions.reduce(
    (sum, position) => sum + (position.quantity * position.price) / 100,
    0,
  )

  return (
    <Card className="bg-muted/40">
      <CardHeader className="flex min-h-[36px] items-center sm:justify-start">
        <CardTitle>Positions</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={
                      header.id === 'quantity' ||
                      header.id === 'price' ||
                      header.id === 'totalValue' ||
                      header.id === 'asOf'
                        ? 'text-right'
                        : 'text-left'
                    }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={
                      cell.column.id === 'quantity' ||
                      cell.column.id === 'price' ||
                      cell.column.id === 'totalValue' ||
                      cell.column.id === 'asOf'
                        ? 'text-right'
                        : 'text-left'
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="text-right">
                Total Portfolio Value:
              </TableCell>
              <TableCell className="text-right">${totalValue.toFixed(2)}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  )
}
