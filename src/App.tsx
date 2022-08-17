import { useCallback, useState } from "react"
import cn from "classnames"
import useSWR from "swr"
import qs from "query-string"

import "./styles.css"

import { SearchBar, Table } from "./components"
import type { SchemaType } from "./components"
import { LoaderIcon, ErrorIcon } from "./ui"
import { getUsers } from "./api"
import type { UserType } from "./api"

export default function App() {
  const [query, setQuery] = useState<SchemaType | null>(null)
  const { data, error, isValidating } = useSWR<UserType[]>(
    query ? `https://api.test?${qs.stringify(query)}` : null,
    getUsers
  )

  const handleSubmit = useCallback((data: SchemaType) => {
    setQuery(data)
  }, [])

  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "max-w-3xl",
        "min-h-screen",
        "mx-auto",
        "p-5",
        "gap-5"
      )}
    >
      <div>
        <SearchBar onSubmit={handleSubmit} isLoading={isValidating} />
      </div>
      <div className={cn("flex", "flex-1")}>
        {data && <Table className={cn("grow")} data={data} />}
      </div>

      {error && (
        <div className="toast">
          <div className="alert alert-error shadow-lg">
            <div>
              <ErrorIcon />
              <span>Error! Something went wrong.</span>
            </div>
          </div>
        </div>
      )}
      {isValidating && (
        <div
          className={cn(
            "fixed",
            "h-screen",
            "w-screen",
            "inset-0",
            "flex",
            "items-center",
            "justify-center"
          )}
        >
          <div className={cn("flex", "items-center")}>
            <LoaderIcon />
            Loading...
          </div>
        </div>
      )}
    </div>
  )
}
