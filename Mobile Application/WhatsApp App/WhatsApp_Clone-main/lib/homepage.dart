import 'package:flutter/material.dart';
import 'package:whatsapp_clone/chats.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Color(0xFF075E54),
          title: Text('WhatsApp'),
          actions: [
            IconButton(
              onPressed: () {},
              icon: Icon(Icons.search),
            ),
            IconButton(onPressed: () {}, icon: Icon(Icons.more_vert))
          ],
          bottom: TabBar(tabs: [
            Tab(icon: Icon(Icons.camera_alt)),
            Tab(child: Text('CHATS')),
            Tab(child: Text('STATUS')),
            Tab(child: Text('CALLS')),
          ]),
        ),
        body: TabBarView(
          children: [
            Container(),
            Chats(),
            Container(child: Text("Status")),
            Container(child: Text("Calls")),
          ],
        ),
      ),
    );
  }
}
