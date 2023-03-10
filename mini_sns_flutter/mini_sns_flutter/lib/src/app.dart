import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:get/route_manager.dart';

import 'screen/home.dart';

class Myapp extends StatelessWidget {
  String? token;
  Myapp(this.token, {super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      home: (token == null) ? const Login() : const Home(),
    );
  }
}
