const Users = require('./users.models');
const RecoveryPassword = require('./recoveryPasswords.models');
const Conversations = require('./conversations.models');
const Participants = require('./participants.models');
const Messages = require('./messages.models');

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPassword)
    RecoveryPassword.belongsTo(Users)

    // Users - Conversations
    //? FK = Conversations
    //? 1 user -> hasMany conversations -> 1 user tiene MUCHAS conversations
    Users.hasMany(Conversations)
    //? 1 conversation -> 1 User        -> 1 conversation pertenece a 1 user
    Conversations.belongsTo(Users)

    // Users - Messages
    //? FK = Messages
    //? 1 user -> hasMany messages  -> 1 user tiene MUCHOS messages
    Users.hasMany(Messages)
    //? 1 message -> 1 user         -> 1 message petenece a 1 user
    Messages.belongsTo(Users)

    // Users - participants -> tabla pibote entre users - conversations
    //? FK = Participants
    //? 1 user -> hasMany participaciones       -> 1 conversation tiene MUCHAS participaciones
    Users.hasMany(Participants)
    //? 1 participancion -> 1 conversation      -> 1 participación pertenece a 1 conversación
    Participants.belongsTo(Users)

    // Conversations - participants
    //? FK = Participants
    //? 1 conversation -> hasMany participaciones  -> 1 conversation tiene MUCHOS participaciones
    Conversations.hasMany(Participants)
    //? 1 participante -> 1 conversation        -> 1 participacion pertenece a 1 conversation
    Participants.belongsTo(Conversations)

    //Conversations - messages -> tabla pibote entre users - conversations
    //? FK = Messages
    //? 1 conversation -> hasMany messages  -> 1 conversation tiene MUCHOS messages
    Conversations.hasMany(Messages)
    //? 1 messages -> 1 conversation        -> 1 mensaje pertenece a 1 conversation
    Messages.belongsTo(Conversations)
};

module.exports = initModels
