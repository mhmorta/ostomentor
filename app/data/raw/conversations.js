export const Conversations = [
  {
    withUserId: 1,
    permission: false,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hey, how’ve you been?'
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        text: 'Yeah, not bad, actually I finally got a call back.'
      },
      {
        id: 3,
        time: -100,
        type: 'out',
        text: 'I go in for training tomorrow.'
      },
      {
        id: 4,
        time: -45,
        type: 'in',
        text: 'I’ve got a lot planned this weekend.'
      },
      {
        id: 5,
        time: -5,
        type: 'out',
        text: 'That works pretty well for me!'
      }]
  },
  {
    withUserId: 5,
    permission: true,
    messages: [
      {
        id: 0,
        type: 'out',
        time: -300,
        text: 'Hello Dr. Al Hassan. It\' awesome to see you on Ostomentor',
        image: false
      },
      {
        id: 1,
        time: -240,
        type: 'in',
        image: false,
        text: 'Hi \n For sure! this is the best channel to be in touch with you... \n Let me knot if you have any problem'
      },
      {
        id: 2,
        time: -200,
        type: 'out',
        image: true,
        text: 'Dear Doctor, my wound is irritating... please help me. What should I do?'
      }]
  }
];

export default Conversations;