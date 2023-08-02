import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = ({ count }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">Restaurant</a>
        <button className="btn btn-primary">
          <Link
            to="/orders"
            style={{ color: "white", backgroundColor: "none" }}
          >
            Order
          </Link>
          <span className="badge bg-secondary">{count}</span>
        </button>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});
export default connect(mapStateToProps)(Header);
