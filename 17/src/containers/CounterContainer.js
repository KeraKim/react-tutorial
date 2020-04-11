import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { bindActionCreators } from "redux";
import { increase, decrease } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 1차
// const mapStateToprop = state => ({
//   number: state.counter.number
// });
//
// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });

// export default connect(mapStateToprop, mapDispatchToProps)(CounterContainer);
//
//
//
//
//
// 2차
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
//   })
// )(CounterContainer);
//
//
//
//
//
//
// 3차
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispath =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispath
//     )
// )(CounterContainer);
//

export default connect(
  stste => ({
    number: stste.counter.number
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);
