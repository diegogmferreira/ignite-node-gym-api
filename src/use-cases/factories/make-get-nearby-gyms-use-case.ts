import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { GetNearbyGymsUseCase } from '../get-nearby-gyms'

export function makeGetNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new GetNearbyGymsUseCase(gymsRepository)

  return useCase
}
