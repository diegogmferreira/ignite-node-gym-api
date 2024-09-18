import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { GetNearbyGymsUseCase } from './get-nearby-gyms'

let gymRepository: InMemoryGymsRepository
let getNearbyGymsUseCase: GetNearbyGymsUseCase

describe('Get near by gyms Use Case', () => {
  beforeEach(async () => {
    gymRepository = new InMemoryGymsRepository()
    getNearbyGymsUseCase = new GetNearbyGymsUseCase(gymRepository)

  })

  it('Should be able to get nearby gyms', async () => {
    await gymRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    await gymRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -27.0592052,
      longitude: -49.4001091,
    })

    const { gyms } = await getNearbyGymsUseCase.execute({
      userLatitude: -27.2092052,
      userLongitude: -49.6401091,
    })
    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Near Gym' }),
    ])
  })
})
