import { faker } from "@faker-js/faker"

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

const response = Array(4).fill(null).map(templateFaker)

export const getUsers = (): Promise<UserType[]> => {
  const delay = Math.floor(Math.random() * 2000)

  return new Promise(res => {
    setTimeout(() => {
      res(response)
    }, delay)
  })
}
