const User = require('./User');
const Conversation = require('./Conversation');
const Message = require('./Message');

//user has many posts
User.hasMany(Conversation, {
    foreignKey: 'user_id'
});

Conversation.belongsTo(User, {
    foreignKey: 'user_id'
});

//Conversations has many Messages
Conversation.hasMany(Message, {
    foreignKey: 'conversation_id', 
    onDelete: 'CASCADE'
});

Message.belongsTo(Conversation, {
    foreignKey: 'conversation_id'
});

//user has many Messages
User.hasMany(Message, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Conversation,
    Message
};