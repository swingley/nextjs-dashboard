import { Metadata } from 'next';
import { fetchAllCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers tk',
};

export default async function Page() {
  const customers = await fetchAllCustomers();
  console.log('customers', customers);
  return <Table customers={customers} />;
}
