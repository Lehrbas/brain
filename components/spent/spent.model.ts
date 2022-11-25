import { v4 } from 'uuid';

interface SpentProps {
  id?: string,
  type: string,
  tag: string,
  amount: number,
  date: string,
}

export class Spent {
  private props: SpentProps;

  constructor(props: Omit<SpentProps, 'id'>, id?: string) {
    const { type, tag, amount, date } = props;

    this.props = props;

    if(!id) {
      this.props.id = v4();
    }
  }

  get id() {
    return this.props.id;
  }

  get type() {
    return this.props.type;
  }

  get tag() {
    return this.props.tag;
  }

  get amount() {
    return this.props.amount;
  }

  get date() {
    return this.props.date;
  }
}