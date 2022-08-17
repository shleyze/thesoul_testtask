import { useFormik } from "formik"
import cn from "classnames"

import { schema } from "./schema"
import type { SchemaType } from "./schema"

import { SearchIcon } from "../../ui"

type SearchBarProps = {
  onSubmit?: (data: SchemaType) => Promise<any>
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  const formik = useFormik({
    initialValues: schema.cast({}),
    validationSchema: schema,
    onSubmit: values => {
      if (onSubmit) {
        return onSubmit(values)
      }
      return Promise.resolve()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            name="search"
            placeholder="Start searching..."
            className={cn(
              "input",
              "input-bordered",
              "w-full",
              formik.touched.search && formik.errors.search && "input-error"
            )}
            disabled={formik.isSubmitting}
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <button className="btn btn-square" disabled={formik.isSubmitting}>
            <SearchIcon />
          </button>
        </div>
        {formik.touched.search && formik.errors.search && (
          <span className="text-error">{formik.errors.search}</span>
        )}
      </div>
    </form>
  )
}
