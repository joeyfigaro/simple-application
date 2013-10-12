//
//  APIRequest.m
//  APIRequest
//
//  Created by Joey Figaro on 3/30/11.
//  Copyright 2011 Overture. All rights reserved.
//

#import "APIHandler.h"

static APIHandler *sharedAPIHandler = nil;

@implementation APIHandler

@synthesize response;
@synthesize timestamp;
@synthesize groupList;
@synthesize statusList;

#pragma mark -
#pragma mark Singleton Methods

+ (id) sharedAPIHandler {

        @synchronized(self) {
                if (sharedAPIHandler == nil) {
                        sharedAPIHandler = [[super allocWithZone:NULL] init];
                }
        }

        return sharedAPIHandler;
}
+ (id) allocWithZone:(NSZone *)zone {
        return [[self sharedAPIHandler] retain];
}
- (id) copyWithZone:(NSZone *)zone {
        return self;
}
- (id) retain {
        return self;
}
- (unsigned) retainCount {
        return UINT_MAX; // denotes an object that cannot be released
}
- (void) release {

}
- (id) autorelease {
        return self;
}
- (id) init {
        if (self = [super init]) {
                response   = nil;
                timestamp  = nil;
                groupList  = nil;
                statusList = nil;
        }
        return self;
}
- (void) dealloc
{
        [response release];
        [super dealloc];
}

#pragma mark -
#pragma mark Setter Methods

+ (void) setResponse:(NSMutableDictionary *)input {
        APIHandler.response = input;
}
+ (void) setTimestamp:(NSString *)input {
        APIHandler.timestamp = input;
}
+ (void) setGroupList:(NSMutableArray *)input {
        APIHandler.groupList = input;
}
+ (void) setStatusList:(NSMutableArray *)input {
        APIHandler.statusList = input;
}

#pragma mark -
#pragma mark APIHandler Methods

+ (void) sendRequest:(NSString *)method toURL:(NSString *)url email:(NSString *)email password:(NSString *)password action:(NSString *)action {
        // Convert our arguments string into an NSData object
        NSString *argumentsList = [[NSString alloc] init];
        argumentsList = [NSString stringWithFormat:@"email=%@&password=%@&action=%@", email, password, action];
        NSData *theArguments = [[NSData alloc] init];
        theArguments = [argumentsList dataUsingEncoding:NSUTF8StringEncoding];

        // Convert our url string into an NSURL object
        NSURL *theURL = [[NSURL alloc] initWithString:url];

        // Create our request
        NSMutableURLRequest *request = [[[NSMutableURLRequest alloc] initWithURL:theURL] autorelease];
        [request setHTTPMethod:method];
        [request setHTTPBody:theArguments];

        // Response data containers
        NSError *urlError; // error container
        NSData *urlData = [NSURLConnection sendSynchronousRequest:request returningResponse:nil error:&urlError];

        // Create an object for our response data so our parser can utilize it
        NSMutableData *JSON = [[NSMutableData alloc] initWithData:urlData];

        // Set up our parser
        SBJsonParser *parser = [SBJsonParser new];
        NSDictionary *parsedJSON = [parser objectWithData:JSON];

        // Clean up after ourselves
        [JSON release];
        [parser release];

        //////////////////////////////////////////////////////////////////////////
        //                                                                                                                                              //
        //         Check for a successful response and set our data accordingly         //
        //                                                                                                                                              //
        //////////////////////////////////////////////////////////////////////////

        NSString *status = [parsedJSON valueForKey:@"status"];

        if([status isEqualToString:@"success"]) {
                APIHandler.response = [parsedJSON objectForKey:@"response"];
                APIHandler.timestamp = [response valueForKey:@"time"];
                APIHandler.groupList = [response objectForKey:@"groupList"];
                APIHandler.statusList = [response objectForKey:@"statusList"];
        } else {
                APIHandler.response = nil;
                APIHandler.timestamp = nil;
                APIHandler.groupList = nil;
                APIHandler.statusList = nil;
        }

        [parsedJSON release];
}

@end