'use client'

import { enableRipple } from '@syncfusion/ej2-base';
import {
  ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
} from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from "./datasource";
import Link from "next/link";

enableRipple(true);

export default function Home() {
  const pageSettings: object = { pageSize: 6 };
  const filterSettings: object = { type: 'Excel' };
  return (<>
      <br/><br/><br/>

      <div className='flex items-center justify-center'>
          <ButtonComponent cssClass='e-info mx-3'>
              <Link href='/formsGetStarted'>
                  Forms Get Started
              </Link>
          </ButtonComponent>
          <ButtonComponent cssClass='e-info mx-3'>
              <Link href='/formsFunctionalComponent'>
                  Forms Functional
              </Link>
          </ButtonComponent>
          <ButtonComponent cssClass='e-info mx-3'>
              <Link href='/normalHookForm'>
                  React Hook Form - Normal
              </Link>
          </ButtonComponent>
          <ButtonComponent cssClass='e-info mx-3'>
              <Link href='/dynamicHookForm'>
                  React Hook Form - Dynamic
              </Link>
          </ButtonComponent>
      </div>

      <br/><br/>

      <h2 className='text-xl font-bold bg-amber-600 border-green-500 border-2 text-white'>Syncfusion React Grid Component</h2>
      <GridComponent
          dataSource={data}
          allowGrouping={true}
          allowSorting={true}
          allowFiltering={true}
          allowPaging={true}
          pageSettings={pageSettings}
          filterSettings={filterSettings}
          height={180}
      >
          <ColumnsDirective>
              <ColumnDirective field="OrderID" width="100" textAlign="Right"/>
              <ColumnDirective field="CustomerID" width="100"/>
              <ColumnDirective field="EmployeeID" width="100" textAlign="Right"/>
              <ColumnDirective
                  field="Freight"
                  width="100"
                  format="C2"
                  textAlign="Right"
              />
              <ColumnDirective field="ShipCountry" width="100"/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group]}/>
      </GridComponent>
    </>)
}
