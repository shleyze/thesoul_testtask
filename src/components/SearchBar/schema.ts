import * as Yup from "yup"

export const schema = Yup.object({
  search: Yup.string().default("").min(3)
})

export type SchemaType = Yup.InferType<typeof schema>
