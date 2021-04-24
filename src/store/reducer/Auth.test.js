import * as actionTypes from '../action/action'
import Authreducer from './Auth'

describe('<Reducer>', () => {

    it('should return the initial redux state', () => {
        expect(Authreducer(undefined, {})).toEqual({
            token: null,
            userid: null,
            error: null,
            authRedirectPath: '/'
        })
    })

    it('should return updated token & userid after Login', () => {
        expect(Authreducer({
            token: null,
            userid: null,
            error: null,
            authRedirectPath: '/'
        },
            {
                type: actionTypes.AUTHENTICATION,
                token: 'updated-token',
                userId: 'updated-userid'
            })).toEqual({
                token: 'updated-token',
                userid: 'updated-userid',
                error: null,
                authRedirectPath: '/'
            })
    })

    it('should return token & userid equal to null <logout>', () => {
        expect(Authreducer({
            token: 'some-token',
            userid: 'some-id',
            error: null,
            authRedirectPath: '/'
        }, {
            type: actionTypes.LOGOUT,
            token: null,
            userId: null
        })).toEqual({
            token: null,
            userid: null,
            error: null,
            authRedirectPath: '/'
        })
    })

})

