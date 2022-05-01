package intemporal.error;

import clojure.lang.IExceptionInfo;
import clojure.lang.IPersistentMap;

/**
 * Represents internal workflow/acvitity errors that shouldn't be caught.
 */
public class WorkflowError extends Error implements IExceptionInfo {
    public final IPersistentMap data;

    public WorkflowError(String s, IPersistentMap data) {
        this(s, data, (Throwable) null);
    }

    public WorkflowError(String s, IPersistentMap data, Throwable throwable) {
        super(s, throwable);
        if (data != null) {
            this.data = data;
        } else {
            throw new IllegalArgumentException("Additional data must be non-nil.");
        }
    }

    public IPersistentMap getData() {
        return this.data;
    }

    public String toString() {
        return "clojure.lang.ExceptionInfo: " + this.getMessage() + " " + this.data.toString();
    }
}
