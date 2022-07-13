import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { paginateResponse } from '../../utils/paginate-response';
import { plainToClass, plainToInstance } from 'class-transformer';
import { GetAllOrganizationDto } from './dto/get-all-offices.dto';

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

  async findAll(page: number, limit: number) {
    try {
      const result = await this.organizationRepository.findAndCount();

      const paginatedOrganizations = paginateResponse(result, page, limit);
      const mappedOrganization = paginatedOrganizations.data.map(
        (organization: Organization) =>
          plainToClass(GetAllOrganizationDto, organization),
      ) as Organization[];

      paginatedOrganizations.data = mappedOrganization;

      return {
        result: paginatedOrganizations,
        message: 'Consulta exitosa.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.organizationRepository.find({
        where: {
          id_organization: id,
        },
      });

      const organizationResult = plainToInstance(GetAllOrganizationDto, result);

      return {
        result: organizationResult,
        message: 'Organizacion consultada con exito.',
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    try {
      await this.organizationRepository.update(id, updateOrganizationDto);

      return {
        message: `Organizacion con el id:${id} ha sido actualizada con exito.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      await this.organizationRepository.delete(id);

      return {
        message: `La organizacion con el id: ${id}, se elimino de forma exitosa.`,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
