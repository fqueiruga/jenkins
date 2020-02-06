package jenkins.model;

import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.junit.Rule;
import org.junit.Test;
import org.jvnet.hudson.test.JenkinsRule;
import org.xml.sax.SAXException;

import java.io.IOException;

import static org.junit.Assert.*;

public class GlobalUIConfigurationTest {

    @Rule
    public JenkinsRule r = new JenkinsRule();

    @Test
    public void testSwitchUI() throws IOException, SAXException {
        r.jenkins.setUseNewUI(false);
        JenkinsRule.WebClient wc = r.createWebClient();
        HtmlPage hp = wc.goTo("manage");
        assertEquals(0, hp.getByXPath("//*[@class='ui-refresh']").size());

        r.jenkins.setUseNewUI(true);
        hp = wc.goTo("manage");
        assertEquals(1, hp.getByXPath("//*[@class='ui-refresh']").size());
    }
}