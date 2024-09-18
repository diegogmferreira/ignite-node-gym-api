import { GymsRepository } from '@/repositories/gym-repository'
import { Gym } from '@prisma/client'

interface GetNearbyGymsUseCaseRequest {
  userLatitude: number
  userLongitude: number
  // distance: number
  // page: number
}

interface GetNearbyGymsUseCaseResponse {
  gyms: Gym[]
}

export class GetNearbyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) { }

  async execute({
    userLatitude,
    userLongitude,
    // page,
  }: GetNearbyGymsUseCaseRequest): Promise<GetNearbyGymsUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      userLatitude,
      userLongitude,
      // distance: 10,
    })

    return { gyms }
  }
}
