import React from 'react'

import reducer from "../../redux/reducers/postsReducer"
import * as actionTypes from "../../redux/actions/actionTypes"

describe("postsReducer", function () {
    it('it should return initial state', function () {
        expect(reducer(undefined, {})).toEqual({
            loading: false,
            posts: []
        })
    })

    it('it should be loading', function () {
        expect(reducer({
            loading: false,
            posts: []
        }, {type: actionTypes.GET_POSTS_START})).toEqual({
            loading: true,
            posts: []
        })
    })

    it('it should stop loading', function () {
        expect(reducer({
            loading: true,
            posts: []
        }, {type: actionTypes.GET_POSTS_SUCCESS, posts: []})).toEqual({
            loading: false,
            posts: []
        })

        expect(reducer({
            loading: true,
            posts: []
        }, {type: actionTypes.GET_POSTS_ERROR, posts: []})).toEqual({
            loading: false,
            posts: []
        })


    })

    it('it should stop loading and have some posts', function () {
        expect(reducer({
            loading: true,
            posts: []
        }, {
            type: actionTypes.GET_POSTS_SUCCESS,
            posts: [{
                    title: "title",
                    author: "author",
                    content: "this is content",
                    popularity: 23,
                    categories: ["tech", "business"]
                }]
        })).toEqual({
            loading: false,
            posts: [{
                title: "title",
                author: "author",
                content: "this is content",
                popularity: 23,
                categories: ["tech", "business"]
            }]
        })
    })
})