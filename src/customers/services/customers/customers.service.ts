import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'alejandrohernang@gmail.com',
      name: 'El Ivan',
    },
    {
      id: 2,
      email: 'adri@gmail.com',
      name: 'El Adri',
    },
    {
      id: 3,
      email: 'hannah@gmail.com',
      name: 'La Hannah',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}
