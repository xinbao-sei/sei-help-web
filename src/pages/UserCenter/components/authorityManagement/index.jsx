import React from 'react';
import LeftTable from './components/LeftTable';
import RightTable from './components/RightTable';
import CascadeLayout from '@/components/layout/CascadeLayout';
import PageWrapper from '@/components/PageWrapper';
export default class  extends React.Component {

  state = {
    leftTableRowId: ''
  }

  handleLeftSelectedRows = (rows) => {
    if (rows && rows.length) {
      this.setState({
        leftTableRowId: rows[0].code,
      });
    }
  }

  render() {
    const { leftTableRowId } = this.state;

    return (
      <PageWrapper>
        <CascadeLayout title={['功能项目组', '功能项']} layout={[10, 14]}>
          <LeftTable slot="left" onSelectedRows={this.handleLeftSelectedRows} />
          <RightTable slot="right" leftTableRowId={leftTableRowId}/>
        </CascadeLayout>
      </PageWrapper>
    );
  }
}
