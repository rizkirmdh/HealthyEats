const { createUser, loginUser, updateUser, createPlan, updatePlan, deletePlan, classifyingImage, addConsumedCalorie } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/register',
        handler: createUser,
    },
    {
        method: 'POST',
        path: '/login',
        handler: loginUser,
    },
    {
        method: 'PUT',
        path: '/updateUser',
        handler: updateUser
    },
    {
        method: 'POST',
        path: '/createPlan',
        handler: createPlan,
    },
    {
        method: 'PUT',
        path: '/updatePlan/{plan_id}',
        handler: updatePlan,
    },
    {
        method: 'PUT',
        path: '/updatePlan/{plan_id}/calorie',
        handler: addConsumedCalorie,
    },
    {
        method: 'DELETE',
        path: '/deletePlan/{plan_id}',
        handler: deletePlan,
    },
    {
        method: 'POST',
        path: '/classifyImage',
        handler: classifyingImage,
        options: {
            payload: {
              output: 'stream',
              parse: true,
              allow: 'multipart/form-data',
              multipart: true,
              maxBytes: 10 * 1024 * 1024,
            },
        },
    },
];

module.exports = routes;