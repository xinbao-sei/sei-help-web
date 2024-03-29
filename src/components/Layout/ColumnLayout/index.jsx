import React, { PureComponent, } from 'react';
import { Card, Row, Col, } from 'antd';
import cls from 'classnames';
import styles from './index.less';

export default class ColumnLayout extends PureComponent {

  renderChildren = () => {
    const { children, title=['左标题', '右标题'], layout=[10, 14], extra=[null, null] } = this.props;
    const [leftTitle, rightTitle,] = title;
    const [leftSpan, rightSpan,] = layout;
    const [leftExtra, rightExtra,] = extra;
    const bordered = false;

    if (!children) {
      return null;
    }

    return [].concat(children).map((child) => {
      const { slot, } = child.props;
      if (['left', 'right'].includes(slot)) {
        if (slot === 'left') {
          return (
            <Col key={slot} className={cls('layout-col')} span={leftSpan}>
              <Card title={leftTitle} bordered={bordered} extra={leftExtra} >
                {child}
              </Card>
            </Col>
          );
        }
        if (slot === 'right') {
          return (<Col key={slot} className={cls('layout-col')} span={rightSpan}>
            <Card title={rightTitle} bordered={bordered} extra={rightExtra} className={cls('layout-col-right-card')}>
              {child}
            </Card>
          </Col>);
        }
      }

      return null;
    }).filter(child => !!child);
  }

  render() {
    const { className } = this.props;

    return (
      <Row gutter={8} className={cls(styles['cascade-layout-wrapper'], className)}>
        {this.renderChildren()}
      </Row>
    );
  }
}
