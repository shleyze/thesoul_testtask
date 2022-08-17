import type { ReactNode } from "react"
import cn from "classnames"
import { UserType } from "../../api"

type ElProps = {
  children?: ReactNode | ReactNode[] | null
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

export const renderRow = (_: any, user: UserType) => (
  <>
    <TD>{user.firstName}</TD>
    <TD>{user.surname}</TD>
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
