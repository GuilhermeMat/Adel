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

export const decodeUser = (token: string) => {
  try {
    const decoded = jwt.decode(token)
    return decoded
  } catch (error) {
    console.log('error', error)
  }
}