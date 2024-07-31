import React, { useState } from 'react';
import { Flex, Table, Transfer } from 'antd';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd';
import * as dataHandler from '../components/datahandler'
import Divider from '@mui/material/Divider'

type TransferItem = GetProp<TransferProps, 'dataSource'>[number];
type TableRowSelection<T extends object> = TableProps<T>['rowSelection'];

// ALL LIST INTERFACES
interface CountyList {
    key: string;
    county: string;
}

interface CityList {
    key: string;
    city: string;
}

interface CountyTractList {
    key: string;
    census: number;
    tract: number;
    county: string;
}

// ALL TABLE PROPS
interface CityTransferProps extends TransferProps<TransferItem> {
    dataSource: CityList[];
    leftColumns: TableColumnsType<CityList>;
    rightColumns: TableColumnsType<CityList>;
}

interface CountyTransferProps extends TransferProps<TransferItem> {
    dataSource: CountyList[];
    leftColumns: TableColumnsType<CountyList>;
    rightColumns: TableColumnsType<CountyList>;
}

interface CountyTractTransferProps extends TransferProps<TransferItem> {
    dataSource: CountyTractList[];
    leftColumns: TableColumnsType<CountyTractList>;
    rightColumns: TableColumnsType<CountyTractList>;
}

// Customize Table Transfer
const CityTransfer: React.FC<CityTransferProps> = (props) => {
    const { leftColumns, rightColumns, ...restProps } = props;
    return (
      <Transfer style={{ width: '100%' }} {...restProps}>
        {({
          direction,
          filteredItems,
          onItemSelect,
          onItemSelectAll,
          selectedKeys: listSelectedKeys,
          disabled: listDisabled,
        }) => {
          const columns = direction === 'left' ? leftColumns : rightColumns;
          const rowSelection: TableRowSelection<TransferItem> = {
            getCheckboxProps: () => ({ disabled: listDisabled }),
            onChange(selectedRowKeys) {
              onItemSelectAll(selectedRowKeys, 'replace');
            },
            selectedRowKeys: listSelectedKeys,
            selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
          };
  
          return (
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={filteredItems}
              size="small"
              style={{ pointerEvents: listDisabled ? 'none' : undefined }}
              onRow={({ key, disabled: itemDisabled }) => ({
                onClick: () => {
                  onItemSelect(key, !listSelectedKeys.includes(key));
                },
              })}
            />
          );
        }}
      </Transfer>
    );
  };

  const CountyTransfer: React.FC<CountyTransferProps> = (props) => {
    const { leftColumns, rightColumns, ...restProps } = props;
    return (
      <Transfer style={{ width: '100%' }} {...restProps}>
        {({
          direction,
          filteredItems,
          onItemSelect,
          onItemSelectAll,
          selectedKeys: listSelectedKeys,
          disabled: listDisabled,
        }) => {
          const columns = direction === 'left' ? leftColumns : rightColumns;
          const rowSelection: TableRowSelection<TransferItem> = {
            getCheckboxProps: () => ({ disabled: listDisabled }),
            onChange(selectedRowKeys) {
              onItemSelectAll(selectedRowKeys, 'replace');
            },
            selectedRowKeys: listSelectedKeys,
            selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
          };
  
          return (
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={filteredItems}
              size="small"
              style={{ pointerEvents: listDisabled ? 'none' : undefined }}
              onRow={({ key, disabled: itemDisabled }) => ({
                onClick: () => {
                  onItemSelect(key, !listSelectedKeys.includes(key));
                },
              })}
            />
          );
        }}
      </Transfer>
    );
  };

  const CountyTractTransfer: React.FC<CountyTractTransferProps> = (props) => {
    const { leftColumns, rightColumns, ...restProps } = props;
    return (
      <Transfer style={{ width: '100%' }} {...restProps}>
        {({
          direction,
          filteredItems,
          onItemSelect,
          onItemSelectAll,
          selectedKeys: listSelectedKeys,
          disabled: listDisabled,
        }) => {
          const columns = direction === 'left' ? leftColumns : rightColumns;
          const rowSelection: TableRowSelection<TransferItem> = {
            getCheckboxProps: () => ({ disabled: listDisabled }),
            onChange(selectedRowKeys) {
              onItemSelectAll(selectedRowKeys, 'replace');
            },
            selectedRowKeys: listSelectedKeys,
            selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
          };
  
          return (
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={filteredItems}
              size="small"
              style={{ pointerEvents: listDisabled ? 'none' : undefined }}
              onRow={({ key, disabled: itemDisabled }) => ({
                onClick: () => {
                  onItemSelect(key, !listSelectedKeys.includes(key));
                },
              })}
            />
          );
        }}
      </Transfer>
    );
  };

const CityListData = dataHandler.getCityList();

const CountyListData = dataHandler.getCountyList();

const CountyTractListData = dataHandler.getCountyTractList();

function getSelectedCities(dataStruct: any) {
  var selectedCities: Array<any> = [];

  dataStruct.forEach(function (item: any) {
    var cityName = item.city;
    CityListData.forEach(function (item: any) {
      if (item.city == cityName) {
        selectedCities.push(item.key);
      }
    })
  })
  return selectedCities as React.Key[];
}

function getSelectedCounties(dataStruct: any) {
  var selectedCounties: Array<any> = [];

  dataStruct.forEach(function (item: any) {
    var countyName = item.county;
    CountyListData.forEach(function (item: any) {
      if (item.county == countyName) {
        selectedCounties.push(item.key);
      }
    })
  })
  return selectedCounties as React.Key[];
}

function getSelectedCountyTracts(dataStruct: any) {
  var selectedCountyTracts: Array<any> = [];

  dataStruct.forEach(function (item: any) {
    var countyName = item.county;
    var tractName = item.tract
    CountyTractListData.forEach(function (item: any) {
      if (item.county == countyName && item.tract == tractName)  {
        selectedCountyTracts.push(item.key);
      }
    })
  })
  return selectedCountyTracts as React.Key[];
}

function getSelectedLIHTC(dataStruct: any, points: number) {
  var selectedCountyTracts: Array<any> = [];

  dataStruct.forEach(function (item: any) {
    var countyName = item.county;
    var tractName = item.tract;
    var pointVal = item.lihtc;
    if (pointVal == points) {
      CountyTractListData.forEach(function (item: any) {
        if (item.county == countyName && item.tract == tractName )  {
          selectedCountyTracts.push(item.key);
        }
      })
    }
  })
  return selectedCountyTracts as React.Key[];
}

function getSelectedHQJobs(dataStruct: any, points: number) {
  var selectedCities: Array<any> = [];

  dataStruct.forEach(function (item: any) {
    var cityName = item.city;
    var pointVal = item.hqjobs;
    if (pointVal == points) {
      CityListData.forEach(function (item: any) {
        if (item.city == cityName) {
          selectedCities.push(item.key);
        }
      })
    }
  })
  return selectedCities as React.Key[];
}

// DEFINE COLUMNS
const cityColumns: TableColumnsType<CityList> = [
    {
      dataIndex: 'city',
      title: 'City',
    }
  ];

const countyColumns: TableColumnsType<CountyList> = [
    {
        dataIndex: 'county',
        title: 'County',
    }
];

const countyTractColumns: TableColumnsType<CountyTractList> = [
    {
        dataIndex: 'census',
        title: 'Census Tract'
    },
    {
        dataIndex: 'tract',
        title: 'Name'
    },
    {
        dataIndex: 'county',
        title: 'County'
    }
]

// FILTER OPTIONS
const cityFilterOption = (input: string, item: CityList) =>
    item.city.toLowerCase()?.includes(input.toLowerCase());

const countyFilterOption = (input: string, item: CountyList) =>
    item.county.toLowerCase()?.includes(input.toLowerCase());

const countyTractFilterOption = (input: string, item: CountyTractList) =>
    item.census.toString()?.includes(input) || item.tract.toString()?.includes(input) || item.county.toLowerCase()?.includes(input.toLowerCase());

// EXPORT TRANSFERS
export const MQCTSelector: React.FC = () => {
  const initialTargets = getSelectedCountyTracts(dataHandler.getmqctData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTractTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  //DO SAVE ACTION HERE
  console.log(targetKeys);

  return (
    <div>
    <h2>MQCT ➡️ Included</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTractTransfer
        dataSource={CountyTractListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyTractFilterOption}
        leftColumns={countyTractColumns}
        rightColumns={countyTractColumns}
      />
    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const NMQCTSelector: React.FC = () => {
  const initialTargets = getSelectedCountyTracts(dataHandler.getnmqctData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTractTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>NMQCT ➡️ Included</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTractTransfer
        dataSource={CountyTractListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyTractFilterOption}
        leftColumns={countyTractColumns}
        rightColumns={countyTractColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const DDASelector: React.FC = () => {
  const initialTargets = getSelectedCountyTracts(dataHandler.getddaData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTractTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>DDA ➡️ Included</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTractTransfer
        dataSource={CountyTractListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyTractFilterOption}
        leftColumns={countyTractColumns}
        rightColumns={countyTractColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const RuralSelector: React.FC = () => {
  const initialTargets = getSelectedCounties(dataHandler.getruralData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>Rural ➡️ Not Rural</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTransfer
        dataSource={CountyListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyFilterOption}
        leftColumns={countyColumns}
        rightColumns={countyColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const UnderservedSelector: React.FC = () => {
    const initialTargets = getSelectedCities(dataHandler.getunderservedData());
    const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
    const [disabled, setDisabled] = useState(false);
  
    const onChange: CityTransferProps['onChange'] = (nextTargetKeys) => {
      setTargetKeys(nextTargetKeys);
    };
  
  
    return (
      <div>
      <h2>Underserved ➡️ NOT Included</h2>
      <Flex align="start" gap="middle" vertical>
        <CityTransfer
          dataSource={CityListData}
          targetKeys={targetKeys}
          showSearch
          showSelectAll={false}
          onChange={onChange}
          filterOption={cityFilterOption}
          leftColumns={cityColumns}
          rightColumns={cityColumns}
        />
  
      </Flex>
      <div>&nbsp;</div>
      <Divider />
      </div>
    );
};

export const RentBurdenSelector: React.FC = () => {
  const initialTargets = getSelectedCities(dataHandler.getrentburdenData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CityTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>Rent Burdened ➡️ Included</h2>
    <Flex align="start" gap="middle" vertical>
      <CityTransfer
        dataSource={CityListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={cityFilterOption}
        leftColumns={cityColumns}
        rightColumns={cityColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const LIHTCZeroSelector: React.FC = () => {
  const initialTargets = getSelectedLIHTC(dataHandler.getlihtcData(), 0);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTractTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>LIHTC ➡️ Zero Points</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTractTransfer
        dataSource={CountyTractListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyTractFilterOption}
        leftColumns={countyTractColumns}
        rightColumns={countyTractColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const LIHTCOneSelector: React.FC = () => {
  const initialTargets = getSelectedLIHTC(dataHandler.getlihtcData(), 1);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTractTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>LIHTC ➡️ One Point</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTractTransfer
        dataSource={CountyTractListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyTractFilterOption}
        leftColumns={countyTractColumns}
        rightColumns={countyTractColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const ActiveDevSelector: React.FC = () => {
  const initialTargets = getSelectedCities(dataHandler.getactivedevData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CityTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>Active Development ➡️ Included</h2>
    <Flex align="start" gap="middle" vertical>
      <CityTransfer
        dataSource={CityListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={cityFilterOption}
        leftColumns={cityColumns}
        rightColumns={cityColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const HQJobsTwoSelector: React.FC = () => {
  const initialTargets = getSelectedHQJobs(dataHandler.gethqjobsData(), 2);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CityTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>High Quality Jobs ➡️ Two Points</h2>
    <Flex align="start" gap="middle" vertical>
      <CityTransfer
        dataSource={CityListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={cityFilterOption}
        leftColumns={cityColumns}
        rightColumns={cityColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const HQJobsOneSelector: React.FC = () => {
  const initialTargets = getSelectedHQJobs(dataHandler.gethqjobsData(), 1);
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CityTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>High Quality Jobs ➡️ One Point</h2>
    <Flex align="start" gap="middle" vertical>
      <CityTransfer
        dataSource={CityListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={cityFilterOption}
        leftColumns={cityColumns}
        rightColumns={cityColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};

export const SocialVulnSelector: React.FC = () => {
  const initialTargets = getSelectedCounties(dataHandler.getsocialvulnData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
    const [disabled, setDisabled] = useState(false);
  
    const onChange: CountyTransferProps['onChange'] = (nextTargetKeys) => {
      setTargetKeys(nextTargetKeys);
    };
  
  
    return (
      <div>
      <h2>Social Vulnerability ➡️ Included</h2>
      <Flex align="start" gap="middle" vertical>
        <CountyTransfer
          dataSource={CountyListData}
          targetKeys={targetKeys}
          showSearch
          showSelectAll={false}
          onChange={onChange}
          filterOption={countyFilterOption}
          leftColumns={countyColumns}
          rightColumns={countyColumns}
        />
  
      </Flex>
      <div>&nbsp;</div>
      <Divider />
      </div>
    );
};

export const DRSelector: React.FC = () => {
  const initialTargets = getSelectedCounties(dataHandler.getdrData());
  const [targetKeys, setTargetKeys] = useState<TransferProps['targetKeys']>(initialTargets);
  const [disabled, setDisabled] = useState(false);

  const onChange: CountyTransferProps['onChange'] = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };


  return (
    <div>
    <h2>Disaster Recovery ➡️ 2 Points</h2>
    <Flex align="start" gap="middle" vertical>
      <CountyTransfer
        dataSource={CountyListData}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={countyFilterOption}
        leftColumns={countyColumns}
        rightColumns={countyColumns}
      />

    </Flex>
    <div>&nbsp;</div>
    <Divider />
    </div>
  );
};