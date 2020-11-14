import React, {Component} from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";

class ApiContainer extends Component {
  state = {
    employees: [],
    search: ""
  };
  
  apiCall () {
    API.search()
      .then(res => {
        this.originalEmployees = res.data.results
        this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.apiCall()
  }
  handleInputChange=(event)=>{
    event.preventDefault();
    const value=event.target.value;
    const employeeCopy = this.originalEmployees.filter(x => `${x.name.first} ${x.name.last}`.toLowerCase().includes(value.toLowerCase()))
    this.setState({ employees: employeeCopy, search: value})
  }
  handleOnClick=()=>{
    const sorted = [...this.state.employees].sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.originalEmployees.sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.setState({ employees: sorted})
  }
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <Card heading="Employee Directory">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>
          <Col size="md-8">
            <Card>
              <EmployeeDetail
                employees={this.state.employees}
                handleOnClick={this.handleOnClick}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ApiContainer;
