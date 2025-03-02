import { Request, Response, NextFunction } from 'express'

export type ExpressMiddleware = ( req: Request, res: Response, next: NextFunction) => Promise<void | Response>

export interface Repository<T> {
    getOne(item: { id: string }): Promise<T | undefined>
    add(item: T): Promise<T | undefined>
    update(item: T): Promise<T | undefined>
    remove(item: { id: string }): Promise<void>
    getAll(...param: any): Promise<T[] | undefined>
} 