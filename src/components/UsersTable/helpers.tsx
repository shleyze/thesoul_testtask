import { Fragment } from "react"
import cn from "classnames"

import { UserType } from "../../api"

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

export const renderRow = (user: UserType, highlight?: string) => {
  const classNames = cn(
    "border-b",
    "border-slate-300",
    "dark:border-slate-700",
    "p-4",
    "text-slate-500",
    "dark:text-slate-400"
  )

  return (
    <>
      <td className={classNames}>
        {getHighlightedText(user.firstName, highlight)}
      </td>
      <td className={classNames}>
        {getHighlightedText(user.surname, highlight)}
      </td>
      <td className={classNames}>{user.phone}</td>
      <td className={classNames}>{user.phone}</td>
    </>
  )
}

export const renderHeader = () => {
  const classNames = cn(
    "font-semibold",
    "p-4",
    "text-slate-900",
    "dark:text-slate-200",
    "text-left",
    "bg-slate-50",
    "dark:bg-slate-700",
    "w-1/4"
  )

  return (
    <tr>
      <th className={classNames}>First name</th>
      <th className={classNames}>Surname</th>
      <th className={classNames}>Phone</th>
      <th className={classNames}>Email</th>
    </tr>
  )
}
