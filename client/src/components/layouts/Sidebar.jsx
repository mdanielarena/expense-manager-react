import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    const { user } = this.props.auth;

    const user_management = (
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>User Management</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="/users">
              Users
            </a>
            <a className="collapse-item" href="/roles">
              Roles
            </a>
          </div>
        </div>
      </li>
    );

    const expense_categories = (
      <a className="collapse-item" href="login.html">
        Expense Categories
      </a>
    );
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">EXPENSE MANAGEMENT</div>
        </a>

        <hr className="sidebar-divider my-0"></hr>

        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider"></hr>

        <div className="sidebar-heading"></div>

        {user.role.name === "admin" ? user_management : null}

        <div className="sidebar-heading"></div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Expense Management</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {user.role.name === "admin" ? expense_categories : null}
              <a className="collapse-item" href="register.html">
                Expenses
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider"></hr>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/change-password">
                ChangePassword
              </a>
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
