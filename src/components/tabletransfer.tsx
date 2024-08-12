import React, { useState } from 'react';
import { Flex, Table, Transfer } from 'antd';
import type { GetProp, TableColumnsType, TableProps, TransferProps } from 'antd';
import * as dataHandler from '../components/datahandler'
import Divider from '@mui/material/Divider'
import { DeleteForever } from "@mui/icons-material";
import { Button } from "@mui/material";

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

// TRANSLATE VALUES TO KEYS

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

// TRANSLATE KEYS TO VALUES
function setMQCT(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyTractListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var tractName = item.tract;
        var lineItem = {mqct: true, county: countyName, tract: tractName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setNMQCT(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyTractListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var tractName = item.tract;
        var lineItem = {nmqct: true, county: countyName, tract: tractName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setDDA(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyTractListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var tractName = item.tract;
        var lineItem = {dda: true, county: countyName, tract: tractName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setRural(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var lineItem = {rural: false, county: countyName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setUnderserved(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CityListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var cityName = item.city;
        var lineItem = {underserved: 0, city: cityName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setRentBurden(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CityListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var cityName = item.city;
        var lineItem = {rentburden: 1, city: cityName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setLIHTC(selectedKeys: React.Key[], points: number) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyTractListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var tractName = item.tract;
        var lineItem = {lihtc: points, county: countyName, tract: tractName}
        resultData.push(lineItem)
      }
    })
  })
  var existingPoints = 0;
  if (points == 0) {
    existingPoints = 1
  }
  var existingKeys = getSelectedLIHTC(dataHandler.getlihtcData(), existingPoints)
  existingKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyTractListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var tractName = item.tract;
        var lineItem = {lihtc: existingPoints, county: countyName, tract: tractName}
        resultData.push(lineItem)
      }
    })
  })

  return resultData;
}

function setActiveDev(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CityListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var cityName = item.city;
        var lineItem = {activedev: 1, city: cityName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setHQJobs(selectedKeys: React.Key[], points: number) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CityListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var cityName = item.city;
        var lineItem = {hqjobs: points, city: cityName}
        resultData.push(lineItem)
      }
    })
  })
  var existingPoints = 1;
  if (points == 1) {
    existingPoints = 2
  }
  var existingKeys = getSelectedHQJobs(dataHandler.gethqjobsData(), existingPoints)
  existingKeys.forEach(function(item: any) {
    var tryKey = item;
    CityListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var cityName = item.city;
        var lineItem = {hqjobs: existingPoints, city: cityName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setSocialVuln(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var lineItem = {socialvuln: 1, county: countyName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
}

function setDR(selectedKeys: React.Key[]) {
  var resultData: Array<any> = []
  selectedKeys.forEach(function(item: any) {
    var tryKey = item;
    CountyListData.forEach(function(item: any) {
      if (tryKey == item.key){
        var countyName = item.county;
        var lineItem = {dr: 1, county: countyName}
        resultData.push(lineItem)
      }
    })
  })
  return resultData;
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
    //DO SAVE ACTION HERE
    var content = setMQCT(nextTargetKeys);
    dataHandler.updateData(content, "mqctData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setMQCT([]);
    dataHandler.updateData(content, "mqctData");
  };

  return (
    <div>
      <h2 className='inline'>MQCT ➡️ Included 
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear MQCT Data
        </Button> </h2>
          
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
    //DO SAVE ACTION HERE
    var content = setNMQCT(nextTargetKeys);
    dataHandler.updateData(content, "nmqctData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setNMQCT([]);
    dataHandler.updateData(content, "nmqctData");
  };

  return (
    <div>
    <h2>NMQCT ➡️ Included
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear NMQCT Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setDDA(nextTargetKeys);
    dataHandler.updateData(content, "ddaData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setDDA([]);
    dataHandler.updateData(content, "ddaData");
  };

  return (
    <div>
    <h2>DDA ➡️ Included
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear DDA Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setRural(nextTargetKeys);
    dataHandler.updateData(content, "ruralData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setRural([]);
    dataHandler.updateData(content, "ruralData");
  };

  return (
    <div>
    <h2>Rural ➡️ Not Rural
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Rural Data
        </Button> </h2>
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
      //DO SAVE ACTION HERE
    var content = setUnderserved(nextTargetKeys);
    dataHandler.updateData(content, "underservedData");
    };
  
    const handleClick = () => {
      setTargetKeys([]);
      var content = setUnderserved([]);
      dataHandler.updateData(content, "underservedData");
    };
  
    return (
      <div>
      <h2>Underserved ➡️ Zero Points (NOT Included)
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Underserved Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setRentBurden(nextTargetKeys);
    dataHandler.updateData(content, "rentburdenData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setRentBurden([]);
    dataHandler.updateData(content, "rentburdenData");
  };

  return (
    <div>
    <h2>Rent Burdened ➡️ One Point
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Rent Burdened Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setLIHTC(nextTargetKeys, 0);
    dataHandler.updateData(content, "lihtcData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setLIHTC([], 0);
    dataHandler.updateData(content, "lihtcData");
  };

  return (
    <div>
    <h2>LIHTC ➡️ Zero Points
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear LIHTC (0) Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setLIHTC(nextTargetKeys, 1);
    dataHandler.updateData(content, "lihtcData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setLIHTC([], 1);
    dataHandler.updateData(content, "lihtcData");
  };

  return (
    <div>
    <h2>LIHTC ➡️ One Point
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear LIHTC (1) Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setActiveDev(nextTargetKeys);
    dataHandler.updateData(content, "activedevData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setActiveDev([]);
    dataHandler.updateData(content, "activedevData");
  };

  return (
    <div>
    <h2>Active Development ➡️ One Point
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Active Development Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setHQJobs(nextTargetKeys, 2);
    dataHandler.updateData(content, "hqjobsData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setHQJobs([], 2);
    dataHandler.updateData(content, "hqjobsData");
  };

  return (
    <div>
    <h2>High Quality Jobs ➡️ Two Points
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear High Quality Jobs (2) Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setHQJobs(nextTargetKeys, 1);
    dataHandler.updateData(content, "hqjobsData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setHQJobs([], 1);
    dataHandler.updateData(content, "hqjobsData");
  };

  return (
    <div>
    <h2>High Quality Jobs ➡️ One Point
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear High Quality Jobs (1) Data
        </Button> </h2>
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
      //DO SAVE ACTION HERE
      var content = setSocialVuln(nextTargetKeys);
      dataHandler.updateData(content, "socialvulnData");
    };
  
    const handleClick = () => {
      setTargetKeys([]);
      var content = setSocialVuln([]);
      dataHandler.updateData(content, "socialvulnData");
    };

    return (
      <div>
      <h2>Social Vulnerability ➡️ One Point
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Social Vulnerability Data
        </Button> </h2>
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
    //DO SAVE ACTION HERE
    var content = setDR(nextTargetKeys);
    dataHandler.updateData(content, "drData");
  };

  const handleClick = () => {
    setTargetKeys([]);
    var content = setDR([]);
    dataHandler.updateData(content, "drData");
  };

  return (
    <div>
    <h2>Disaster Recovery ➡️ Two Points
        <Button
          onClick={handleClick}
          component="label"
          variant="outlined"
          startIcon={<DeleteForever />}
          sx={{ marginLeft: "1rem", float: "right" }}
        >
          Clear Disaster Recovery Data
        </Button> </h2>
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