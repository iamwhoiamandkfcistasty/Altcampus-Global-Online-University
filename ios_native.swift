import SwiftUI

struct iOSClassroomView: View {
    var body: some View {
        VStack {
            Text("ALTCAMPUS // IOS CORE")
                .font(.system(size: 22, weight: .black, design: .monospaced))
                .foregroundColor(.pink)
            Text("Secure Session Commited: Account Access Level Active")
                .font(.caption)
                .foregroundColor(.gray)
        }
        .padding()
        .background(Color(red: 0.03, green: 0.03, blue: 0.1))
    }
}
