import { Fragment } from "react"
import type { ReactNode } from "react"
import cn from "classnames"

import { UserType } from "../../api"

type ElProps = {
  children?: ReactNode | ReactNode[] | null
}

function getHighlightedText(text: string, highlight?: string) {
  if (!highlight) {
    return text
  }
  const parts = text.split(new RegExp(`(${highlight})`, "gi"))

  return parts.map((part, index) => (
    <Fragment key={index}>
      {part.toLowerCase() === highlight.toLowerCase() ? (
        <mark>{part}</mark>
      ) : (
        part
      )}
    </Fragment>
  ))
}

function TH({ children }: ElProps) {
  return (
    <th
      className={cn(
        "border",
        "border-slate-300",
        "dark:border-slate-600",
        "font-semibold",
        "p-4",
        "text-slate-900",
        "dark:text-slate-200",
        "text-left",
        "bg-slate-50",
        "dark:bg-slate-700"
      )}
    >
      {children}
    </th>
  )
}
function TD({ children }: ElProps) {
  return (
    <td
      className={cn(
        "border",
        "border-slate-300",
        "dark:border-slate-700",
        "p-4",
        "text-slate-500",
        "dark:text-slate-400"
      )}
    >
      {children}
    </td>
  )
}

export const renderRow = (user: UserType, highlight?: string) => (
  <>
    <TD>{getHighlightedText(user.firstName, highlight)}</TD>
    <TD>{getHighlightedText(user.surname, highlight)}</TD>
    <TD>{user.phone}</TD>
    <TD>{user.phone}</TD>
  </>
)

export const renderHeader = () => (
  <tr>
    <TH>First name</TH>
    <TH>Surname</TH>
    <TH>Phone</TH>
    <TH>Email</TH>
  </tr>
)
