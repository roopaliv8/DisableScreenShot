
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDisableScreenShotSpec.h"

@interface DisableScreenShot : NSObject <NativeDisableScreenShotSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DisableScreenShot : NSObject <RCTBridgeModule>
#endif

@end
