const Messages = require('../models/messages.models');
const uuid = require('uuid');
const Participants = require('../models/participants.models');
const Conversations = require('../models/conversations.models');

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
};

const findMessageById = async(id) => {
    const data = await Messages.findOne({
        where : {
            id: id
        },
        include: {
            model: Conversations,
            incude: {
                model: Participants
            }
        }
    })
    return data
}

const deleteMessage = async(id) => {
    const data = await Messages.destroy({
        where: {
            id: id
        }
    })
    return data
};

module.exports = {
    createMessage,
    findMessageById,
    deleteMessage
}