import { ParameterObject } from './Parameter'

export type HeaderObject = Omit<ParameterObject, 'name' | 'in'>
