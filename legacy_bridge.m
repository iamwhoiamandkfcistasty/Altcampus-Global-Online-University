#import <Foundation/Foundation.h>

@interface LegacyMediaBridge : NSObject
- (void)syncAudioBufferStreams:(NSString *)trackId;
@end

@implementation LegacyMediaBridge
- (void)syncAudioBufferStreams:(NSString *)trackId {
    NSLog(@"[Objective-C Bridge]: Linking legacy core components wrapper framework for segment: %@", trackId);
}
@end
