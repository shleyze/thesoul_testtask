import { TableVirtuoso } from "react-virtuoso"
import cn from "classnames"

import type { UserType } from "../../api"
import { renderRow, renderHeader } from "./helpers"

type UsersTableProps = {
  className?: string
  data: UserType[]
  searchedText?: string
}

export function UsersTable(props: UsersTableProps) {
  const { className, data, searchedText } = props

  return (
    <TableVirtuoso
      className={cn(className)}
      data={data}
      style={{ height: "auto" }}
      fixedHeaderContent={renderHeader}
      itemContent={(_n, itemData: UserType) =>
        renderRow(itemData, searchedText)
      }
    />
  )
}
