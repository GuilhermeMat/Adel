import jwt from "jsonwebtoken"

export const verifyUser = (token: string): boolean => {
  try {
    jwt.verify(token, `${process.env.NEXT_PUBLIC_SECRET}`)
    return true
  } catch (error) {
    console.log('JWT ERROR', error)
    return false
  }
}