import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    try {
      const organization = this.organizationRepository.create(
        createOrganizationDto,
      );
      const organizationSaved = await this.organizationRepository.save(
        organization,
      );

      return {
        result: organizationSaved,
        message: 'Organizacion registrada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll() {
    return `This action returns all organization`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    console.log(updateOrganizationDto);
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
