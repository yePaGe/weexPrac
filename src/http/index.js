let stream = weex.requireModule('stream');

export default {
    methods: {
        /**
         * get请求
         * @param {string} url 
         * @param {array} options 
         */
        Get(url, ...options) { // options => success, fail 或 options => params, success, fail
            let params, success, fail;
            if(typeof options[0] == 'object') {
                params = options[0];
                success = options[1];
                fail = options[2];
            }
            else {
                params = {};
                success = options[0];
                fail = options[1];
            }
            stream.fetch({
                method: 'GET',
                url: url,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }, res => {
                if(res.ok == true) {
                    success(res)
                }
                else {
                    if(fail) {
                        fail(res)
                    }
                    else {
                        // alert('sth wrong with server')
                    }
                }
            })
        },
        /**
         * 表单form提交
         * @param {string} url 
         * @param {object} data 
         * @param {function} success 
         * @param {function} fail 
         */
        Post(url, data, success, fail) { 
            stream.fetch({
                method: 'POST',
                url: url,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: qs.stringify(data)
            }, res => {
                if(res.ok == true) {
                    success(res)
                }
                else {
                    if(fail) {
                        fail(res)
                    }
                    else {
                        // alert('sth wrong with server!')
                    }
                }
            })
        },
        /**
         * body流post请求
         * @param {string} url 
         * @param {object} data 
         * @param {function} success 
         * @param {function} fail 
         */
        PostBody(url, data, success, fail) {
            stream.fetch({
                method: 'POST',
                url: url,
                body: data
            }, res => {
                if(res.ok == true) {
                    success(res)
                }
                else {
                    if(fail) {
                        fail(res)
                    }
                    else {
                        // alert('sth wrong with server!')
                    }
                }
            })
        }
    }
}