import { verifyUser } from "@/utils"

export const authentication = (): string => {
  const isTokenExist = JSON.parse(localStorage.getItem('token'))
    if (!isTokenExist || !verifyUser(isTokenExist)) {
      return '/'
    }
  return ''
}