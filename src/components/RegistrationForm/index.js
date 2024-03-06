import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstErrMsg: false,
    lastErrMsg: false,
    isValidForm: false,
  }

  onFirstBlurEvent = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstErrMsg: true})
    } else {
      this.setState({firstErrMsg: false})
    }
  }

  onLastBlurEvent = event => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastErrMsg: true})
    } else {
      this.setState({lastErrMsg: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickAnotherSubmit = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstErrMsg: false,
      lastErrMsg: false,
      isValidForm: false,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstErrMsg: true, lastErrMsg: true})
    } else if (firstName === '') {
      this.setState({firstErrMsg: true})
    } else if (lastName === '') {
      this.setState({lastErrMsg: true})
    } else {
      this.setState({firstErrMsg: false, lastErrMsg: false, isValidForm: true})
    }
  }

  render() {
    const {firstName, lastName, firstErrMsg, lastErrMsg, isValidForm} =
      this.state

    return (
      <div className="bg-cont">
        <h1 className="main-heading">Registration</h1>
        {isValidForm === false && (
          <form className="form-cont" onSubmit={this.onSubmitForm}>
            <label htmlFor="firstname">FIRST NAME</label>
            <input
              className={firstErrMsg ? 'err-border-msg' : ''}
              onBlur={this.onFirstBlurEvent}
              onChange={this.onChangeFirstName}
              value={firstName}
              id="firstname"
              type="text"
              placeholder="First name"
            />
            <p className="err-msg">{firstErrMsg ? 'Required' : ''}</p>
            <label htmlFor="lastname">LAST NAME</label>
            <input
              className={lastErrMsg ? 'err-border-msg' : ''}
              onBlur={this.onLastBlurEvent}
              onChange={this.onChangeLastName}
              value={lastName}
              id="lastname"
              type="text"
              placeholder="Last name"
            />
            <p className="err-msg">{lastErrMsg ? 'Required' : ''}</p>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        )}
        {isValidForm && (
          <div className="success-cont">
            <img
              className="success-img"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success-para">Submitted Successfully</p>
            <button
              className="submit-btn"
              type="button"
              onClick={this.onClickAnotherSubmit}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
