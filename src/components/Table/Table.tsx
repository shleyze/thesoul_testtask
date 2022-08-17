import { TableVirtuoso } from "react-virtuoso"
import cn from "classnames"

import type { UserType } from "../../api"
import { renderRow, renderHeader } from "./helpers"

type TableProps = {
  className?: string
  data: UserType[]
}

export function Table(props: TableProps) {
  const { className, data } = props

  return (
    <TableVirtuoso
      className={cn(className)}
      data={data}
      style={{ height: "auto" }}
      fixedHeaderContent={renderHeader}
      itemContent={renderRow}
    />
  )
}
