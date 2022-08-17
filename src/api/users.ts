import { faker } from "@faker-js/faker"
import qs from "query-string"

import type { SchemaType } from "../components"

export type UserType = {
  firstName: string
  surname: string
  phone: string
  email: string
}

const templateFaker = (): UserType => {
  const firstName = faker.name.firstName()
  const surname = faker.name.lastName()
  const phone = faker.phone.number()
  const email = faker.internet.email(firstName, surname)
  return {
    firstName,
    surname,
    phone,
    email
  }
}

const response = Array(10000).fill(null).map(templateFaker)

export const getUsers = (url: string): Promise<UserType[]> => {
  const delay = Math.floor(Math.random() * 2000)
  const parsedUrl = qs.parseUrl(url)
  const { search } = parsedUrl.query as SchemaType

  return new Promise(res => {
    setTimeout(() => {
      res(
        response.filter(({ firstName, surname }) => {
          if (search) {
            return (
              firstName.toLocaleLowerCase().includes(search) ||
              surname.toLocaleLowerCase().includes(search)
            )
          }
          return true
        })
      )
    }, delay)
  })
}
