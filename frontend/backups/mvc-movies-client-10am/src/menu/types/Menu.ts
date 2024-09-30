export type Menu = {
  title: string
  url: string
  active: boolean
  children?: Menu[]
}