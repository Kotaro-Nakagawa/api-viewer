import { ContactObject } from './ContactType'
import { LicenseObject } from './LicenseType'

export type InfoObject = {
  title: string
  description?: string
  termsOfService?: string
  contact?: ContactObject
  license?: LicenseObject
  version: string
}
