const { createApp } = Vue

  createApp({
    data() {
      return {
        currentIndex: 0,
        newMessage: null,
        searchNameContact: '',
        // contactsFilter: [],
        contacts: [
          {
            name: "Michele",
            avatar: "./img/avatar_1.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Hai portato a spasso il cane?",
                status: "sent",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "Ricordati di stendere i panni",
                status: "sent",
              },
              {
                date: "10/01/2020 16:15:22",
                message: "Tutto fatto!",
                status: "received",
              },
            ],
          },
          {
            name: "Fabio",
            avatar: "./img/avatar_2.jpg",
            visible: true,
            messages: [
              {
                date: "20/03/2020 16:30:00",
                message: "Ciao come stai?",
                status: "sent",
              },
              {
                date: "20/03/2020 16:30:55",
                message: "Bene grazie! Stasera ci vediamo?",
                status: "received",
              },
              {
                date: "20/03/2020 16:35:00",
                message: "Mi piacerebbe ma devo andare a fare la spesa.",
                status: "sent",
              },
            ],
          },
          {
            name: "Samuele",
            avatar: "./img/avatar_3.jpg",
            visible: true,
            messages: [
              {
                date: "28/03/2020 10:10:40",
                message: "La Marianna va in campagna",
                status: "received",
              },
              {
                date: "28/03/2020 10:20:10",
                message: "Sicuro di non aver sbagliato chat?",
                status: "sent",
              },
              {
                date: "28/03/2020 16:15:22",
                message: "Ah scusa!",
                status: "received",
              },
            ],
          },
          {
            name: "Alessandro B.",
            avatar: "./img/avatar_4.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Lo sai che ha aperto una nuova pizzeria?",
                status: "sent",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "Si, ma preferirei andare al cinema",
                status: "received",
              },
            ],
          },
          {
            name: "Alessandro L.",
            avatar: "./img/avatar_5.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Ricordati di chiamare la nonna",
                status: "sent",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "Va bene, stasera la sento",
                status: "received",
              },
            ],
          },
          {
            name: "Claudia",
            avatar: "./img/avatar_6.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Ciao Claudia, hai novità?",
                status: "sent",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "Non ancora",
                status: "received",
              },
              {
                date: "10/01/2020 15:51:00",
                message: "Nessuna nuova, buona nuova",
                status: "sent",
              },
            ],
          },
          {
            name: "Federico",
            avatar: "./img/avatar_7.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Fai gli auguri a Martina che è il suo compleanno!",
                status: "sent",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "Grazie per avermelo ricordato, le scrivo subito!",
                status: "received",
              },
            ],
          },
          {
            name: "Davide",
            avatar: "./img/avatar_8.jpg",
            visible: true,
            messages: [
              {
                date: "10/01/2020 15:30:55",
                message: "Ciao, andiamo a mangiare la pizza stasera?",
                status: "received",
              },
              {
                date: "10/01/2020 15:50:00",
                message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                status: "sent",
              },
              {
                date: "10/01/2020 15:51:00",
                message: "OK!!",
                status: "received",
              },
            ],
          },
        ],
      };
    },
    methods: {
      saveIndex(i){
        this.currentIndex = i;
        console.log(this.currentIndex)
      },
      sentOrReceived(indexContact, indexMsg){
        if(this.contacts[indexContact].messages[indexMsg].status === "sent"){
          return 'message-chat-sent'
        }
        else{
          return 'message-chat-received'
        }
      },
      sentMessage(){
        const newMsg = {
          date: DateTime.now(),
          message: this.newMessage,
          status: "sent",
        };

        this.contacts[this.currentIndex].messages.push(newMsg);
        this.newMessage = "";

        setTimeout(this.receivedMessage, 1000)
      },
      receivedMessage(){
        const newMsg = {
          date: DateTime.now(),
          message: "OK!",
          status: "received",
        };

        this.contacts[this.currentIndex].messages.push(newMsg);
      },
      // searchContact() {
      //   const contactsFilter = this.contacts.filter(contact => {
      //     return contact.name.toLowerCase().includes(this.searchNameContact.toLowerCase());
      //   });

      //   this.contactsFilter = contactsFilter;
      // },
      deleteMessage(i){
        this.contacts[this.currentIndex].messages.splice(i,1);
      },
      lastMessage(contact){
        let msg = "";
        if(contact.messages.length-1 >= 0){
          msg = contact.messages[contact.messages.length-1].message;
        }

        if(msg.length > 30){
          msg = msg.slice(0,30) + "...";
        }

        return msg
      },
      lastDate(contact){
        let fullDate = "";
        if(contact.messages.length-1 > 0){
          fullDate = contact.messages[contact.messages.length-1].date;
        }
        
        let date = fullDate.slice(11,16)
        return date
      },
      searchContact(){
        this.contacts.forEach(element => {
          if(element.name.toLowerCase().includes(this.searchNameContact.toLowerCase())){
            element.visible = true;
          }else{
            element.visible = false;
          }
        });
      }
      // searchContactX(){
      //   if(this.contacts.name.includes(searchNameContact)){
      //     this.contacts.visible = true;
      //   }else{
      //     this.contacts.visible = false;
      //   }
      // },
    },
    computed:{
      // isVisible(i){
      //   console.log(this.contacts[i].visible)
      //   return this.contacts[i].visible
      // }

      // searchContactX: function(){
      //   return this.contacts.name.includes(searchNameContact) ? 'true' : 'false'
      // }

      // isNotVisible:function(){
      //   if(this.contacts.visible === false){
      //     return "not-visible"
      //   }
      // }
    }
  }).mount('#app')